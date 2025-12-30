'use client'

import Image from "next/image";
import Icon, { IconNames } from "../components/icon/Icon";
import { useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import { Card } from "@/components/card/Card";
import { PostItem } from "@/components/post-item/PostItem";
import PostBox from "@/components/post-box/PostBox";
import PostList from "@/components/post-list/PostList";
import Layout from "@/components/layout/Layout";
import { Tile } from "@/components/tile/Tile";
import { ProfileCard } from "@/components/profile-card/ProfileCard";
import { ActionCard } from "@/components/action-card/ActionCard";
import Button, { ButtonTypes } from "@/components/button/Button";

export default function Home() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<>
			<Layout
				top={
					<header>
						<NavBar></NavBar>
					</header>
				}

				bar1={
					<>
						<Tile>
							<ProfileCard name="Jose Yanez"
								backgroundImageUrl="/images/photo1.png"
								location="Davenport, FL"
								mainImageUrl="/images/profile-01.png"
								secondaryImageUrls={["/images/profile.png"]}
								subtitle="Vicky's owner"
							>
							</ProfileCard>
						</Tile>
						<Tile>
							<ActionCard
								title="Pet Friendly Places"
								subtitle="We're looking for great Pet Friendly Places"
								actionText="Suggest a Place"
								iconName={IconNames.plus}>
							</ActionCard>
						</Tile>
					</>
				}

				bar2={<><Tile>
					<ActionCard
						title="Friend Suggestion"
						subtitle="You may also know Burpee Mussi"
						actionText="Add"
						iconName={IconNames.plus}
					>
					</ActionCard>

				</Tile>
					<Tile>
						<h3 style={{ padding: 10 }}>Read our Blog</h3>
					</Tile>
				</>}

				bar3={
					<NavBar docked={true}></NavBar>
				}
			>
				<main>
					<PostList>
						<PostBox></PostBox>
						<Button type={ButtonTypes.LoadMore}>10 new Updates</Button>
						<PostItem commented={true} liked={true} message="Someone liked this post" likes={20} comments={['Hello!']}>
							<Card url="/images/profile.png"></Card>
						</PostItem>

						<PostItem commented={false} liked={false} message="Someone liked this post" likes={20} comments={['Hello!']}>
							<Card url="/images/profile.png"></Card>
						</PostItem>

						<PostItem commented={false} liked={true} message="Someone liked this post" likes={20} comments={['Hello!']}>
							<Card url="/images/profile.png"></Card>
						</PostItem>
					</PostList>
				</main>
			</Layout>
		</>
	);
}
