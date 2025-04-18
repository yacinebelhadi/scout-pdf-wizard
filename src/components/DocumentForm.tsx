
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useState } from "react";

const DocumentForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="groupName">اسم الفوج</Label>
              <Input
                id="groupName"
                placeholder="أدخل اسم الفوج"
                className="text-right"
                dir="rtl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activityType">النشاط</Label>
              <Input
                id="activityType"
                placeholder="نوع النشاط"
                className="text-right"
                dir="rtl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>التاريخ</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-right",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="ml-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP", { locale: ar })
                  ) : (
                    <span>اختر التاريخ</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">المكان</Label>
            <Input
              id="location"
              placeholder="أدخل المكان"
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">مبلغ الإشتراك</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0"
              className="text-right"
              dir="rtl"
            />
          </div>
        </div>

        <Button className="w-full" size="lg">
          إنشاء المستند
        </Button>
      </form>
    </Card>
  );
};

export default DocumentForm;
