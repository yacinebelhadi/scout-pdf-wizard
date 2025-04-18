
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, MapPin, Users } from "lucide-react";

const Activities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">أنشطتنا</CardTitle>
      </CardHeader>
      <CardContent className="text-right" dir="rtl">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-4">
            <Activity className="w-12 h-12 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold mb-2">المخيمات الكشفية</h3>
            <p className="text-gray-600">تنظيم مخيمات تربوية وترفيهية للشباب</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Users className="w-12 h-12 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold mb-2">التدريب القيادي</h3>
            <p className="text-gray-600">برامج تدريبية لتطوير المهارات القيادية</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <MapPin className="w-12 h-12 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold mb-2">خدمة المجتمع</h3>
            <p className="text-gray-600">مبادرات تطوعية لخدمة المجتمع المحلي</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Activities;
