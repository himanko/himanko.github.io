import Image from 'next/image';
import Link from 'next/link';

export default function CertificateCard({ certificate }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={certificate.imageUrl}
          alt={`${certificate.title} certificate`}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium">View Credential</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">
          {certificate.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">{certificate.issuer}</span>
          <span className="text-gray-500">{certificate.date}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {certificate.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hidden Link */}
      <Link
        href={certificate.credentialUrl}
        className="absolute inset-0 z-10"
        aria-label={`View ${certificate.title} credential`}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}