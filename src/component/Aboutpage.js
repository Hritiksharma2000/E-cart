import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aeremcss.css';
import Footers from './Footers';
function Aboutpage(props) {
  return (
    <div className='mt-5 mb-5'>
        <div class="pt-5 w-50">
        <div class="mt-5" style={{'margin-left':'20%'}}>
            <div class="display-6">About DreShop</div>
            <p class="mt-4">Founded in 2016 with a vision to "transform the way trade is done in India leveraging technology", DreShop is India’s largest business-to-business e-commerce platform. It has operations across categories including lifestyle, electronics, home & kitchen, staples, fruits and vegetables, FMCG, pharma, toys and general merchandise.</p>
            <p>DreShop is solving core trade problems faced by small and medium businesses, that are unique to India, through its unique India-fit low-cost business model by leveraging technology and bringing the benefits of eCommerce to them. It is a one stop shop for all business requirements in the b2b space. DreShop has built inclusive tech tools for Bharat, specially catering to the needs of brands, retailers and manufacturers, providing them a level playing field to scale, trade and grow businesses.</p>
            <p>The platform acts as a catalyst to enable transparency, accessibility, affordability and national reach to 15 million manufacturers, 25–30 million retailers, 10–12 million institutional businesses like office, school, HoReCa etc. that account for over 60 million MSMEs in India. udaan’s aim is to be a trusted partner to small businesses by empowering them with technology, financial inclusivity, and supply chain capabilities to compete and win in an increasingly tech and digital world.</p>
            <p>DreShop has a network of over 3 million registered users and 25,000-30,000 sellers across 900+ cities in the country covering more than 12,000 pin codes. The platform has over 1.7 million retailers, chemists, kirana shops, HoReCa, farmers, etc. doing over 4.5 million transactions per month, making DreShop a leader in the b2b eCommerce business.</p>
            <p>DreShop enables small manufacturers, farmers, and brands to market and sell their products across the country at low cost with 100% payment security and complete transparency. While doing so it enables small businesses such as shopkeepers, kirana, restaurants, street vendors, chemists, offices, small factories, contractors etc. to source from a large selection of high-quality products at best prices while facilitating efficient and transparent transactions with huge convenience.</p>
            <p>Through a seamless process, it enables the buyer (retailer) to select a product, place an order with sellers (wholesalers, brands and manufacturers) who pack it and dispatch it through udaanExpress. The buyer pays on delivery unless it is a credit transaction. It provides access to new markets and regions with greater cost-efficiency and better price control.</p>
            <p>The platform has enabled logistics focused on b2b trade built on strong technology and operations for fulfilment and delivery service through udaanExpress. udaanCapital, focused on SME trade financing provides financial products and services for sellers and buyers to expand their business.</p>
            <p>The platform’s SaaS offerings such as analysis of real time marketing feedback through app data analytics enables brands and manufacturers to make well-informed decisions about product launches and testing of new products in different markets. While the app-based pricing system gives better pricing control, the product listing advertisements and in-app advertisements encourages manufacturers and wholesalers to reach their targeted, specific, and ready-to-purchase retailers on the platform.</p>
            <p>DreShop is headquartered in Bengaluru with offices in all leading metros and major cities across India.</p>
        </div>
    </div>
    <div className='m-0 p-0' style={{'backgroundColor' : 'rgb(244, 246, 249)'}}>
      <div class="w-50" style={{'margin-left':'23%'}} >
        <div class="fw-bold pt-5">Founders Profile</div>
        <div class="display-6">Amod Malviya</div>
        <p class="mt-4">Amod Malviya is a co-founder of DreShop. He founded DreShop in 2016 with Vaibhav Gupta and Sujeet Kumar, who were both former senior executives at Flipkart.</p>
        <p>Prior to founding DreShop, Amod was heading technology at Flipkart. Most notably, he built and scaled Flipkart’s engineering platforms. Amod previously worked with ApnaPaise (formerly Apnaloan), i2 Technologies, Itellix Software Solutions and Riya Internet Technologies.</p>
        <p>Amod is known to be amongst India’s top tech minds.</p>
        <p>He has done his BTech in Electrical Engineering from IIT, Kharagpur.</p>
        <div class="display-6">Sujeet Kumar</div>
        <p class="mt-4">Sujeet Kumar is a co-founder of DreShop. He founded DreShop in 2016 with Vaibhav Gupta and Amod Malviya, who were both former senior executives at Flipkart.</p>
        <p>Prior to founding DreShop, Sujeet was President of Operations at Flipkart where he built operations and supply-chain network for the company. He conceptualised and built the logistics and supply- chain arm of Flipkart - Ekart, which, today, is India’s largest logistics and supply chain company and the backbone of ecommerce distribution.</p>
        <p>Sujeet has done his BTech in Civil Engineering from IIT, Delhi</p>
        <div class="display-6">Vaibhav Gupta</div>
        <p class="mt-4">Vaibhav Gupta is a Co-founder of DreShop. He founded DreShop in 2016 along with Amod Malviya and Sujeet Kumar, who were both former senior executives at Flipkart.</p>
        <p>Prior to founding DreShop, Vaibhav held several leadership roles over a 5-year period at Flipkart. Most notably, he built and scaled Flipkart’s Business Finance & Analytics function.</p>
        <p>Prior to Flipkart, Vaibhav worked with consulting firm McKinsey & Company for three years at the firm’s US offices.</p>
        <p>He holds an MBA from the University of Virginia and a BTech in Computer Science and Engineering from IIT, Delhi.</p>
        <div class="mt-5 fw-bold fs-5"id="legal">Legal and compliance details</div>
        <p class="mt-4 pb-5">HTPL FSSAI License Number - 10021043000131</p>
      </div>
    </div>
     <Footers/>
    </div>
  )
}

export default Aboutpage;
