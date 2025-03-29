import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer";

import {registerLicense} from "@syncfusion/ej2-base";
const license = process.env.NEXT_PUBLIC_LICENSE;
const resourceUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
if (license) {
  registerLicense(license);
} else {
  console.error(
    "License key is undefined. Please set NEXT_PUBLIC_LICENSE in your environment variables."
  );
}
const FileAnnotate = ({
  pdfFile: {name, url},
}: {
  pdfFile: {name: string; url: string | null};
}) => {
  return (
    <PdfViewerComponent
      downloadFileName={`annotated-${name}`}
      documentPath={url || undefined}
      resourceUrl={resourceUrl}
      style={{height: "640px"}}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          LinkAnnotation,
          BookmarkView,
          ThumbnailView,
          Print,
          TextSelection,
          TextSearch,
          Annotation,
          FormFields,
          FormDesigner,
          PageOrganizer,
        ]}
      />
    </PdfViewerComponent>
  );
};
export default FileAnnotate;
