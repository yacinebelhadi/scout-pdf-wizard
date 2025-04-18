
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Activities from "./presentation/Activities";
import ScoutHistory from "./presentation/ScoutHistory";

const Presentation = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            مرحباً بكم في الكشافة الإسلامية الجزائرية
          </CardTitle>
        </CardHeader>
        <CardContent className="text-right" dir="rtl">
          <p className="text-lg text-gray-700 leading-relaxed">
            نحن منظمة تربوية تطوعية مستقلة تهدف إلى المساهمة في تنمية قدرات
            الأطفال والشباب روحياً وفكرياً وبدنياً ليكونوا مواطنين صالحين في
            مجتمعهم.
          </p>
        </CardContent>
      </Card>
      
      <ScoutHistory />
      <Activities />
    </div>
  );
};

export default Presentation;
