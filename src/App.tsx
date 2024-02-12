import { Document, Font, PDFViewer, Page, Text, View } from "@react-pdf/renderer";

Font.register({ family: "Open Sans", src: "./OpenSans.ttf" });

function App() {
    return (
        <div
            style={{
                display: "grid",
                alignItems: "stretch",
                justifyItems: "stretch",
            }}
        >
            <PDFViewer>
                <Document title="DocumentTitle">
                    <Page style={{ padding: "24pt" }}>
                        <View>
                            <Text
                                style={{
                                    fontFamily: "Open Sans",
                                    fontSize: "12pt",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint
                                reiciendis at labore iusto obcaecati soluta aperiam voluptate cum
                                maiores accusantium. Dicta beatae hic autem eaque esse consequatur
                                ea rem?
                            </Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default App;
