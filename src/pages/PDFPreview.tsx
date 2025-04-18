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
import { 
  Calendar as CalendarIcon, 
  Filter, 
  FileText, 
  Download, 
  Trash2,
  ArrowLeft,
  Eye
} from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import PDFViewer from "@/components/PDFViewer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const sampleDocuments = [
  { 
    id: 1, 
    title: "مستند نشاط خرجة", 
    date: new Date(2025, 3, 18), 
    unit: "كشاف",
    groupName: "فوج السلام برج البحري",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  { 
    id: 2, 
    title: "مستند نشاط مخيم صيفي", 
    date: new Date(2025, 3, 15), 
    unit: "أشبال",
    groupName: "فوج النور",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  { 
    id: 3, 
    title: "مستند نشاط يوم تطوعي", 
    date: new Date(2025, 3, 10), 
    unit: "كشاف متقدم",
    groupName: "فوج الأمل",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  { 
    id: 4, 
    title: "مستند نشاط رياضي", 
    date: new Date(2025, 3, 5), 
    unit: "جوالة",
    groupName: "فوج البدر",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
];

const PDFPreview = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [unit, setUnit] = useState<string | undefined>();
  const { toast } = useToast();

  const filteredDocuments = sampleDocuments.filter(doc => {
    if (date && doc.date.toDateString() !== date.toDateString()) {
      return false;
    }
    
    if (unit && doc.unit !== unit) {
      return false;
    }
    
    return true;
  });

  const handleDownload = (id: number) => {
    toast({
      title: "جاري التحميل",
      description: "سيبدأ تحميل المستند قريباً",
    });
    
    console.log(`Downloading document with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    toast({
      title: "تم الحذف",
      description: "تم حذف المستند بنجاح",
    });
    
    console.log(`Deleting document with ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            العودة
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">المستندات المنشأة</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">تصفية المستندات</h2>
        <div className="flex flex-wrap gap-4 items-center">
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

          <Select onValueChange={setUnit} value={unit}>
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

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">اسم المستند</TableHead>
              <TableHead className="text-right">الفوج</TableHead>
              <TableHead className="text-right">الوحدة</TableHead>
              <TableHead className="text-right">التاريخ</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span>{doc.title}</span>
                      <FileText className="h-4 w-4 text-gray-500" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{doc.groupName}</TableCell>
                  <TableCell className="text-right">{doc.unit}</TableCell>
                  <TableCell className="text-right">
                    {format(doc.date, "PPP", { locale: ar })}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[80vh]">
                          <DialogHeader>
                            <DialogTitle className="text-right">{doc.title}</DialogTitle>
                          </DialogHeader>
                          <PDFViewer file={doc.pdfUrl} />
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(doc.id)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:bg-red-50"
                        onClick={() => handleDelete(doc.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  لا توجد مستندات مطابقة للتصفية
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PDFPreview;
