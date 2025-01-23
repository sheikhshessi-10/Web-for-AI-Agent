import Image from 'next/image'

const logos = [
  { src: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1744848000&v=beta&t=dd7wW9c3zmnsgNMxkypb-it2fYIJvM9FlBpzesNKBsE', alt: 'Company 5' },
  { src: 'https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_200_200/company-logo_200_200/0/1630652622688/microsoft_logo?e=1744848000&v=beta&t=aDo7RiBCBVyaj_OH3gtcqwczYexRDkPhZ6IspxK_lEo', alt: 'Company 5' },
  { src: 'https://media.licdn.com/dms/image/v2/D560BAQH7YExLMK6L2Q/company-logo_200_200/company-logo_200_200/0/1724879902635/nvidia_logo?e=1744848000&v=beta&t=dFCwCPObI0ENWCY_Yg9cparN_UJYzpOLdeAPjfwlJyc', alt: 'Company 5' },
  { src: 'https://media.licdn.com/dms/image/v2/C4E0BAQG0lRhNgYJCXw/company-logo_200_200/company-logo_200_200/0/1678382029963/openai_logo?e=1744848000&v=beta&t=v1kcHaLhwm7jQDAJpW7pNfvSnw5EhSHEqj3CXCXIMgM', alt: 'Company 4' },
  { src: 'https://media.licdn.com/dms/image/v2/C510BAQGKL-X3u2ZZDg/company-logo_200_200/company-logo_200_200/0/1630606878784/milestone_zero_logo?e=1744848000&v=beta&t=jqs8d_0qt48ON8DSLUZsMcpDlJ6x52ssHpzb7BtYcsM', alt: 'Company 5' },

]

export default function LogoBar() {
  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Get into Big Tech!
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={120} height={60} className="h-30 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

