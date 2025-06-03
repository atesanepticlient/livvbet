import { cn } from "@/lib/utils";
import { usePaymentMethods } from "@/store/useStore";

const PaymentMethodFilterMenuItem = ({
  label,
  count,
}: {
  label: string;
  count: string | number;
}) => {
  const { currentMethod, setMethod } = usePaymentMethods((state) => state);
  const isActive = label == currentMethod;

  const handleFilter = () => {
    setMethod(label);
  };

  return (
    <div
      onClick={handleFilter}
      className={cn(
        " w-full payment-menu px-2 md:px-4 py-2  hover:bg-bg-[#336633] flex items-center justify-between cursor-pointer hover:bg-white/90",
        `${isActive ? "bg-[#336633] hover:bg-[#336633]/90" : "bg-white"}`
      )}
    >
      <span
        className={cn(
          "text-xs md:text-sm  capitalize",
          `${isActive ? "text-white" : "text-[#141B1F]"}`
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "text-xs md:text-sm text-white",
          `${isActive ? "text-white" : "text-accent"}`
        )}
      >
        {count}
      </span>
    </div>
  );
};

export default PaymentMethodFilterMenuItem;
