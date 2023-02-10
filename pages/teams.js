import { getTeams } from "@/api";
import Layout from "@/components/Layout/layout";
import { Box, Link, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Teams({ data }) {
	const router = useRouter();
	return (
		<Layout>
			<Stack
				direction={"row"}
				spacing={2}>
				{data?.map((item) => (
					<Box
						width='30%'
						key={item.title}
						onClick={() => router.push("/teams/"+ item.slug)}>
						<img
							className='img'
							src={item.url}
							alt='team'
						/>
						<Link className='teams-link'>{item.title}</Link>
					</Box>
				))}
			</Stack>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const res = await getTeams();
	return {
		props: { data: res },
	};
}
