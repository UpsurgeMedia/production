'use client'
import Div from "./ui/Div";
import SectionHeading from "./ui/SectionHeading";


export default function ErrorPage() {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
    >
      <Div className="container">
        <SectionHeading
          title="This page could <br/>not be found."
          subtitle="404 Error"
          btnText="Back To Home"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
