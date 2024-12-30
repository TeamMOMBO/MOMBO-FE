import { FAQResponse } from '<prefix>/shared/types/content';
import { getFAQServer } from '<prefix>/shared/apis/serverApi/content/contentDetail.server.api';
import FAQDetail from '<prefix>/components/content/faq/faqDetail';
import AnimatedNavBar from '<prefix>/components/common/bar/navbar/animatedNavBar';

type Props = {
  params: {
    id: string;
  };
};

export default async function FAQPage({ params }: Props) {
  const { id } = params;
  const data = await getFAQServer({
    category: 'faq',
    postNo: parseInt(id),
  });

  const faqData = data?.result as FAQResponse;

  return (
    <>
      <h1 className='sr-only'>콘텐츠 상세</h1>
      <FAQDetail faqData={faqData} />
    </>
  );
}
