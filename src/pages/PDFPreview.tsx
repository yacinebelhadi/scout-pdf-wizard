
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { cn } from "@/lib/utils";

const PDFPreview = () => {
  const [date, setDate] = useState<Date>();
  const [unit, setUnit] = useState<string>();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">المستندات المنشأة</h1>
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-right",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="ml-2 h-4 w-4" />
                {date ? (
                  format(date, "PPP", { locale: ar })
                ) : (
                  <span>تصفية حسب التاريخ</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3"
              />
            </PopoverContent>
          </Popover>

          <Select onValueChange={setUnit}>
            <SelectTrigger className="w-[200px] text-right">
              <SelectValue placeholder="تصفية حسب الوحدة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="أشبال">أشبال</SelectItem>
              <SelectItem value="كشاف">كشاف</SelectItem>
              <SelectItem value="كشاف متقدم">كشاف متقدم</SelectItem>
              <SelectItem value="جوالة">جوالة</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setDate(undefined);
              setUnit(undefined);
            }}
          >
            إعادة تعيين
          </Button>
        </div>
      </div>

      {/* Placeholder for PDF list - will be implemented once backend is connected */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border rounded-lg">
          <p className="text-lg font-semibold">مستند نشاط</p>
          <p className="text-sm text-gray-500">التاريخ: ٢٠٢٥/٠٤/١٨</p>
          <p className="text-sm text-gray-500">الوحدة: كشاف</p>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;
