import { Check, Clock, DollarSign } from "lucide-react";

interface FloatingInvoiceCardProps {
  variant: "paid" | "pending" | "amount";
  className?: string;
}

const FloatingInvoiceCard = ({ variant, className = "" }: FloatingInvoiceCardProps) => {
  if (variant === "paid") {
    return (
      <div className={`card-floating p-4 min-w-[180px] ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Invoice #1247</p>
            <p className="font-semibold text-foreground">Paid</p>
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">$2,450</span>
          <span className="text-xs text-muted-foreground">.00</span>
        </div>
      </div>
    );
  }

  if (variant === "pending") {
    return (
      <div className={`card-floating p-4 min-w-[160px] ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Due in 3 days</p>
            <p className="font-semibold text-foreground">Pending</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-floating p-5 min-w-[200px] ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Monthly Revenue</p>
          <p className="text-xl font-bold text-foreground">$24,580</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-primary rounded-full" />
        </div>
        <span className="text-xs font-medium text-primary">75%</span>
      </div>
    </div>
  );
};

export default FloatingInvoiceCard;