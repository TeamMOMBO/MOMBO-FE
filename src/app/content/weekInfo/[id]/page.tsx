import WeekInfoDetail from '<prefix>/components/content/weekInfo/weekInfoDetail';
import { getContentServer } from '<prefix>/shared/apis/serverApi/content/contentDetail.server.api';
import { WeekInfoResponse } from '<prefix>/shared/types/content';

type Props = {
  params: {
    id: string;
  };
};

export default async function FAQPage({ params }: Props) {
  const { id } = params;
  const data = await getContentServer({
    category: 'info',
    postNo: parseInt(id),
  });

  const weekInfoData = data?.result as WeekInfoResponse;
  return (
    <>
      <h1 className='sr-only'>콘텐츠 상세</h1>
      <WeekInfoDetail weekInfoData={weekInfoData} />
    </>
  );
}
