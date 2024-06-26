import { Separator } from "@/components/ui/separator";
import Hero from "./_parts/hero";
import Schedule from "./_parts/schedule";
// import Prizes from "./_parts/prizes";
// import Rules from "./_parts/rules";
import Registration from "./_parts/registration";
// import ProblemStatements from "./_parts/problem_statements";
import Coordinators from "./_parts/coordinators";
import CodeOfConduct from "./_parts/codeofconduct";
import AboutEvent from "./_parts/AboutEvent";
import Navbar from "./_parts/Navbar";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      {/* <HackathonDates /> */}
      
      <Schedule />
      <AboutEvent />
      <Separator />
      {/* <Prizes /> */}
      <Separator />
      {/* <ProblemStatements /> */}
      <Separator />
      {/* <Rules /> */}
      <Separator />
      <Coordinators />
      <Separator />
      <CodeOfConduct />
      <Separator />
      <Registration />
    </main>
  );
}
