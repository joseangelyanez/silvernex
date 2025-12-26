'use client'

import { Card } from "@/components/card/Card";
import { PostItem } from "@/components/post-item/PostItem";

export default function About() {
	return <div style={{margin: '40px'}}>
		
		<PostItem message="Someone liked this post" likes={20} comments={['Hello!']}>
			<Card url="/images/profile.png"></Card>
		</PostItem>
		<br />
		<Card url="/images/profile.png"></Card>
		<br />
		<Card url="/images/profile.png"></Card>
	</div>;
}