"use client";
import React, { useEffect } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { currencies } from "@/data/currency";

const InputCommand = ({
  onChange,
  disabled,
  currentValue,
}: {
  onChange: (value: string) => void;
  disabled: boolean;
  currentValue: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [value, onChange]);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          role="combobox"
          aria-expanded={open}
          className="w-full bg-transparent justify-between border !border-border text-accent capitalize font-medium  hover:bg-transparent"
        >
          {value
            ? currencies.find(
                (allowedValue) => allowedValue.currency.toString() == value
              )?.full
            : currencies[0].full}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-[50000000]">
        <Command>
          <CommandInput placeholder="Select Currency" />
          <CommandList>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.currency}
                  value={currency.currency.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {currency.full}
                  <Check
                    className={cn(
                      "ml-auto",
                      value == currency.currency.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default InputCommand;
