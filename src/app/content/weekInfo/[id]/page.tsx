type Props = {
  params: {
    id: string;
  };
};

export default async function FAQPage({ params }: Props) {
  const { id } = params;

  return <div className='flex h-full flex-col'></div>;
}
