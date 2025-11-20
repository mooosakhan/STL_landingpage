import { CaseStudy } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-16 pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mt-1">
                <div className="mt-3">
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    Featured Project
                  </p>
                  <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {caseStudy.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src={caseStudy.imageUrl}
                    alt={caseStudy.title}
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}