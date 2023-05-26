import axios from "axios";
import { useState } from "react";
import FormatSelect from "./FormatSelect";
import BgColorPicker from "./BgColorPicker";
import UrlInput from "./UrlInput";
function MyForm() {
  const [qrImg, setQrImg] = useState("");
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("png");
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
      <UrlInput url={url} setUrl={setUrl} fetchData={fetchData} />
<<<<<<< HEAD
      {qrImg && (
        <img className="d-flex flex-column" src={`${qrImg}`} alt="result" />
      )}
=======
      <div className="d-flex justify-content-center">
        {qrImg && <img className="p-2" src={`${qrImg}`} alt="result" />}
      </div>
>>>>>>> 640bd57f531310eb8f69b22483ffc8f1f72d9be4
    </div>
  );
}

export default MyForm;
