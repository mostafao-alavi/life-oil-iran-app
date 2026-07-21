import ServiceDetailsClient from './ServiceDetailsClient';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ServiceDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ServiceDetailsClient id={id} />;
}
