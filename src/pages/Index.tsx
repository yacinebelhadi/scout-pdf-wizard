
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentForm from "@/components/DocumentForm";
import Presentation from "@/components/Presentation";
import { FileText, Presentation as PresentationIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          الكشافة الإسلامية الجزائرية
        </h1>
        <h2 className="text-xl text-gray-600">
          Algerian Muslim Scouts Document Generator
        </h2>
      </header>

      <Tabs defaultValue="document" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="document" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Document Generator
          </TabsTrigger>
          <TabsTrigger value="presentation" className="flex items-center gap-2">
            <PresentationIcon className="w-4 h-4" />
            Presentation
          </TabsTrigger>
        </TabsList>
        <TabsContent value="document">
          <DocumentForm />
        </TabsContent>
        <TabsContent value="presentation">
          <Presentation />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
