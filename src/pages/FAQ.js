import "../css/FAQ.css";

export function FAQ() {
  return (
    <div className="FAQMain">
      <FAQItem
        dir="left"
        title="Цагийн ажилчид бүгд найдвартай юу?"
        answer="Бид ажилчдын мэдээллийг  шалгаж бүртгэлийг  баталгаажуулдаг тул хууран мэхлэх болон хууль бүс үйлдэл гарах тал дээр санаа зовохгүй байж болно. Мөн  ажилтан ажлын гүйцэтгэлээс хамааран үнэлгээ авч, тэр үнэлгээ нь нээлттэй харагдах тул та чөлөөтэй сонголт хийх боломжтой."
      ></FAQItem>
      <FAQItem
        dir="right"
        title="Ажил олгож буй хүн найдвартай цалингаа өгөх үү?"
        answer="Ажил олгож буй хүн ажлын захиалгаа баталгаажуулахдаа манай системд төлбөрөө төлсөн байна. Харин ажилтан ажил гүйцэтгэсний дараа зохих цалингаа авах зарчмаар явагдана."
      ></FAQItem>
      <FAQItem
        dir="left"
        title="Үнэлгээ нь ажил олдох боломжинд хэр нөлөөлөх вэ?"
        answer="Ажил олгож буй хүн үнэлгээ, санал болгосон цалин болон ажилтны мэдээллийг харгалзан сонголт хийх тул үнэлгээ нь зөвхөн ажил олдох боломжийг нэмэгдүүлэх нэг хэсэг юм.."
      ></FAQItem>
    </div>
  );
}
function FAQItem(props) {
  return (
    <div className={"FAQItemMain haku-from-"+ props.dir}>
      <div className="FAQItem1">
        <div className="FAQItemIcon1"></div>
        <div className="FAQItemText1">{props.title}</div>
      </div>
      <div className="FAQItem2">
        <div className="FAQItemIcon2"></div>
        <div className="FAQItemText2">{props.answer}</div>
      </div>
    </div>
  );
}
