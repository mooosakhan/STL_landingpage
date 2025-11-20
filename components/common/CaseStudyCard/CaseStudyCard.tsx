import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/types';
import { formatDate } from '@/lib/utils/formatting';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link 
      href={`/case-studies/${caseStudy.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {caseStudy.industry}
          </p>
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {caseStudy.title}
            </h3>
            <p className="mt-2 text-base text-gray-500 line-clamp-3">
              {caseStudy.description}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <div className="flex space-x-1">
              {caseStudy.services.slice(0, 2).map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {service}
                </span>
              ))}
              {caseStudy.services.length > 2 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  +{caseStudy.services.length - 2}
                </span>
              )}
            </div>
          </div>
          <div className="ml-auto text-sm text-gray-500">
            {formatDate(caseStudy.publishedAt)}
          </div>
        </div>
      </div>
    </Link>
  );
}