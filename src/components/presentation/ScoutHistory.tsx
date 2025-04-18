
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScoutHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">تاريخنا</CardTitle>
      </CardHeader>
      <CardContent className="text-right" dir="rtl">
        <p className="text-lg text-gray-700 leading-relaxed">
          تأسست الكشافة الإسلامية الجزائرية في عام 1936 وكانت دائماً في طليعة
          العمل التربوي والوطني. نفتخر بتاريخنا الغني في خدمة المجتمع وتنمية
          الشباب.
        </p>
      </CardContent>
    </Card>
  );
};

export default ScoutHistory;
