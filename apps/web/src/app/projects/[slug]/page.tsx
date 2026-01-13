export default function ProjectPageInfo({
    params,
}: {
    params: { slug: string };
}) {
    return <div>Project: {params.slug}</div>;
}
