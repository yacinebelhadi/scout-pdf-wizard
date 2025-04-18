import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  groupName: z.string().min(2, "يجب أن يكون اسم الفوج أكثر من حرفين"),
  activityType: z.string().min(2, "يجب أن يكون نوع النشاط أكثر من حرفين"),
  unit: z.string({
    required_error: "يرجى اختيار الوحدة",
  }),
  date: z.date({
    required_error: "يرجى اختيار تاريخ",
  }),
  location: z.string().min(2, "يجب إدخال المكان"),
  amount: z.string().min(1, "يجب إدخال مبلغ الإشتراك"),
  participantsCount: z.string().min(1, "يجب إدخال عدد المشاركين"),
  description: z.string().min(10, "يجب أن يكون الوصف أكثر من 10 أحرف"),
});

const DocumentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: "",
      activityType: "",
      unit: "",
      location: "",
      amount: "",
      participantsCount: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // TODO: Implement PDF generation
    console.log(values);
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الفوج</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="أدخل اسم الفوج"
                      className="text-right"
                      dir="rtl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activityType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع النشاط</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="نوع النشاط"
                      className="text-right"
                      dir="rtl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الوحدة</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-right">
                        <SelectValue placeholder="اختر الوحدة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="أشبال">أشبال</SelectItem>
                      <SelectItem value="كشاف">كشاف</SelectItem>
                      <SelectItem value="كشاف متقدم">كشاف متقدم</SelectItem>
                      <SelectItem value="جوالة">جوالة</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>التاريخ</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-right",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="ml-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP", { locale: ar })
                        ) : (
                          <span>اختر التاريخ</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>المكان</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="أدخل المكان"
                      className="text-right"
                      dir="rtl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="participantsCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عدد المشاركين</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      className="text-right"
                      dir="rtl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>مبلغ الإشتراك</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    className="text-right"
                    dir="rtl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>وصف النشاط</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="اكتب وصفاً مختصراً للنشاط"
                    className="text-right"
                    dir="rtl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" size="lg" type="submit">
            <Download className="ml-2 h-4 w-4" />
            إنشاء المستند
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default DocumentForm;
