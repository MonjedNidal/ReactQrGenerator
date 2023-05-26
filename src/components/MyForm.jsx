import axios from "axios";
import { useState, useRef } from "react";
import FormatSelect from "./FormatSelect";
import BgColorPicker from "./BgColorPicker";
import UrlInput from "./UrlInput";
function MyForm() {
  const [qrImg, setQrImg] = useState("");
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("png");
  const imageRef = useRef("");
  async function fetchData() {
    try {
      await axios
        .get(
          `https://api.api-ninjas.com/v1/qrcode?format=${selectedFormat}&data=${url}&bg_color=${bgColor.substring(
            1
          )}`,
          {
            headers: {
              "X-Api-Key": "iSj0xYK/DjyFWIHahiXEtQ==FvZD8Qj5mB5TnPhA",
            },
          }
        )
        .then(({ data }) => {
          try {
            const decodedString = atob(data);
            const src = `data:image/${
              selectedFormat !== "svg" ? selectedFormat : "svg+xml"
            };base64,${btoa(decodedString)}`;
            console.log(src);
            setQrImg(src);
          } catch (error) {
            console.error("Error decoding the Base64 string:", error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="myForm">
      <FormatSelect
        qrImg={qrImg}
        fetchData={fetchData}
        setSelectedFormat={setSelectedFormat}
      />
      <BgColorPicker setBgColor={setBgColor} />
      <UrlInput
        imageRef={imageRef}
        url={url}
        setUrl={setUrl}
        fetchData={fetchData}
      />

      <div ref={imageRef} className="d-flex justify-content-center">
        {qrImg && <img className="p-2" src={`${qrImg}`} alt="result" />}
      </div>
    </div>
  );
}

export default MyForm;
