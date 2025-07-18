import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Charitable Trust | Sudhanand Group',
  description: 'Committed to uplifting lives',
};

export default function CharitableTrustPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-64 md:h-96 px-5 md:px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          <Image src="/trust-header.png" alt="Charitable Trust" fill className="object-cover" priority />
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start">
            <h1 className="text-orange-950 text-3xl md:text-4xl lg:text-6xl font-semibold font-['Geist'] leading-tight md:leading-[69.76px]">
              Charitable Trust
            </h1>
            <p className="justify-start text-black text-xl md:text-2xl lg:text-4xl font-medium font-['Geist'] leading-tight md:leading-10">
              Committed to uplifting lives
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-5 md:px-10 lg:px-40 py-10 bg-orange-50 inline-flex flex-col justify-start items-center gap-2.5">
        <div className="w-full max-w-[1180px] inline-flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          <div className="inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-orange-950 text-5xl md:text-6xl lg:text-9xl font-normal font-['Geist'] leading-tight md:leading-[114px]">120+</span>
            <span className="justify-start text-orange-950 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">Partner hospitals</span>
          </div>
          <div className="inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-orange-950 text-5xl md:text-6xl lg:text-9xl font-normal font-['Geist'] leading-tight md:leading-[114px]">19K+</span>
            <span className="justify-start text-orange-950 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">People reached</span>
          </div>
          <div className="inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-orange-950 text-5xl md:text-6xl lg:text-9xl font-normal font-['Geist'] leading-tight md:leading-[114px]">180+</span>
            <span className="justify-start text-orange-950 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">Villages</span>
          </div>
        </div>
      </div>

      {/* Ventures Section */}
      <div className="self-stretch px-5 md:px-10 lg:px-36 pt-20 md:pt-40 pb-20 md:pb-56 bg-orange-50 inline-flex flex-col justify-center items-center gap-10">
        <div className="w-full max-w-[1040px] inline-flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
          <div className="w-full lg:w-[480px] py-8 lg:py-12 border-t-[0.50px] border-black flex justify-start items-center gap-5 lg:gap-64">
            <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-8 lg:gap-14">
              <img className="w-24 lg:w-32 h-20 lg:h-24" src="/trust-page/SMT 2.png" />
              <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-8">
                <div className="self-stretch inline-flex justify-start items-start gap-4 lg:gap-6">
                  <a 
                    href="https://www.smt.help/" 
                    className="flex-1 flex justify-start items-end gap-2.5 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full lg:w-96 justify-start text-slate-500 text-xl lg:text-3xl font-normal font-['Geist'] capitalize leading-relaxed lg:leading-loose">
                      Dr. M. D. Sachidananda Murthy Memorial Educational Trust
                    </div>
                  </a>
                  <a 
                    href="https://www.smt.help/" 
                    className="w-5 lg:w-6 h-5 lg:h-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                  </a>
                </div>
                <div className="self-stretch justify-start text-black text-sm lg:text-base font-normal font-['Geist'] leading-snug">
                  Founded in March 2013 by Dr. Arjun Sachidanand, the Dr. M. D. Sachidananda Murthy Memorial Educational Trust® began with a mission to improve education and has since expanded into healthcare. Recognized under Sections 12A and 80G of the Income Tax Act, the Trust organizes initiatives like Sudhanand Arogya Vahini, a mobile health service for underserved communities, and Cure+ Blood Bank, ensuring timely access to safe blood. The Trust remains committed to service, accessibility, and long-term impact in education and healthcare.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[480px] self-stretch pt-2.5 pb-8 lg:pb-12 border-t-[0.50px] border-black flex justify-start items-center gap-5 lg:gap-64">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-8 lg:gap-14">
              <img className="w-40 lg:w-52 h-20 lg:h-24" src="/trust-page/CUREPLUS BLOOD BANK 1.png" />
              <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-8">
                <div className="self-stretch inline-flex justify-start items-start gap-4 lg:gap-6">
                  <a 
                    href="https://www.cureplusbloodbank.com/" 
                    className="flex-1 flex justify-start items-end gap-2.5 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full lg:w-80 justify-start text-slate-500 text-xl lg:text-3xl font-normal font-['Geist'] capitalize leading-relaxed lg:leading-loose">
                      CurePlus Blood Centre
                    </div>
                  </a>
                  <a 
                    href="https://www.cureplusbloodbank.com/" 
                    className="w-5 lg:w-6 h-5 lg:h-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                  </a>
                </div>
                <div className="self-stretch justify-start text-black text-sm lg:text-base font-normal font-['Geist'] leading-snug">
                  Cure+ Blood Bank, an initiative by Dr. M. D. Sachidananda Murthy Memorial Educational Trust®, ensures the availability of blood across rural Karnataka. Based in Mysuru, it houses 2,000 units of blood, supporting Cure+ Hospitals in remote areas. Our mobile Sudhanand Arogya Vahinis (Mobile Pathology Labs and Health Centers) facilitate swift transportation, reducing the need for long-distance travel and improving access to life-saving healthcare services in underserved communities.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1040px] border-b-[0.50px] border-black inline-flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-[480px] py-8 lg:py-12 border-t-[0.50px] border-black flex justify-start items-center gap-5 lg:gap-64">
            <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-8 lg:gap-14">
              <img className="w-24 lg:w-32 h-20 lg:h-24" src="/trust-page/SMT 2.png" />
              <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-8">
                <div className="self-stretch inline-flex justify-start items-start gap-4 lg:gap-6">
                  <a
                    href="https://smt.help/educational-trust/"
                    className="flex-1 flex justify-start items-end gap-2.5 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full lg:w-96 justify-start text-slate-500 text-xl lg:text-3xl font-normal font-['Geist'] capitalize leading-relaxed lg:leading-loose">
                      Dr. M. D. Sachidananda Murthy Memorial Educational Trust
                    </div>
                  </a>
                  <a
                    href="https://smt.help/educational-trust/"
                    className="w-5 lg:w-6 h-5 lg:h-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                  </a>
                </div>
                <div className="self-stretch justify-start text-black text-sm lg:text-lg font-normal font-['Geist'] leading-normal">
                  In partnership with SAS Poorna Arogya Health Care and Cure+ Hospitals, Dr. M. D. Sachidananda Murthy Memorial Trust launched the Sudhanand Arogya Vahini (SAV), a mobile healthcare unit serving rural communities. During the Covid-19 pandemic, SAV offered lab tests, telemedicine consultations, and data collection, helping patients avoid exposure and travel costs. The SAV played a crucial role in providing healthcare to those unable to access services due to travel restrictions or safety concerns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="relative h-64 md:h-[625px]">
        <Image
          src="/trust-div.png"
          alt="Healthcare team"
          fill
          className="object-cover"
        />
      </div>

      <Footer />
    </div>
  );
}