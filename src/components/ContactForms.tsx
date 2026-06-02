import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

type FormType = "contact" | "reseller";

interface Props {
  type: FormType;
  trigger: React.ReactNode;
}

export const ContactFormDialog = ({ type, trigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const isReseller = type === "reseller";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = { type };
    fd.forEach((v, k) => {
      const val = String(v).trim();
      if (val) payload[k] = val.slice(0, 2000);
    });

    if (!payload.name || !payload.email) {
      toast({ title: "Missing info", description: "Name and email are required.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: payload });
      if (error) throw error;
      toast({
        title: isReseller ? "Application received" : "Message sent",
        description: "Our US team will be in touch shortly.",
      });
      setOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email sales@queuefusion.com directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isReseller ? "Become a QueueFusion partner" : "Talk to our US team"}</DialogTitle>
          <DialogDescription>
            {isReseller
              ? "Tell us about your business — we'll send partner pricing and next steps."
              : "Send us a message and our US team will get back to you within one business day."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="name" label="Full name *" required maxLength={120} />
            <Field id="email" label="Work email *" type="email" required maxLength={200} />
            <Field id="phone" label="Phone" type="tel" maxLength={40} />
            <Field id="company" label="Company *" required maxLength={150} />
          </div>

          {isReseller && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="website" label="Website" type="url" placeholder="https://" maxLength={200} />
              <Field id="region" label="Region / state" maxLength={80} />
              <div className="sm:col-span-2">
                <Label htmlFor="partnerType">Partner type</Label>
                <select
                  id="partnerType"
                  name="partnerType"
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Select one…</option>
                  <option>Digital signage company</option>
                  <option>AV &amp; IT integrator</option>
                  <option>Traditional signage firm</option>
                  <option>Managed service provider</option>
                  <option>Visitor management specialist</option>
                  <option>Healthcare IT reseller</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="message">
              {isReseller ? "Tell us about your business" : "How can we help? *"}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              maxLength={2000}
              required={!isReseller}
              className="mt-1"
              placeholder={isReseller ? "Customers, regions you cover, products you sell…" : "Tell us about your project, locations, timeline…"}
            />
          </div>

          <Button type="submit" variant="brand" size="lg" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isReseller ? "Submit application" : "Send message"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Goes to sales@queuefusion.com. We never share your info.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  id, label, type = "text", required, maxLength, placeholder,
}: { id: string; label: string; type?: string; required?: boolean; maxLength?: number; placeholder?: string }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} name={id} type={type} required={required} maxLength={maxLength} placeholder={placeholder} className="mt-1" />
  </div>
);
