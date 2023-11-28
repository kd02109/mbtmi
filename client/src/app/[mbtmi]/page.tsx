export default function MBTMIPage({ params }: { params: { mbtmi: string } }) {
  const mbtmi = params.mbtmi;

  return <div>{mbtmi}</div>;
}
