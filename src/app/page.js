"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      
      <Title order={4} mt="sm">Your rating</Title>
      <Rating size="lg"/>
      
      <Textarea label="Your review" placeholder="Do you enjoy eating?"mt="xs" minRows={3}/>
      
      <Button color="orange" mt="xs">Submit Review</Button>

      <Divider my="sm"/>

      <Group position = "center" mt="s">
      <Title order={4}>Elon Musk</Title>
      <Rating value = {5} size="sm" />
      </Group>
      <Text align = "center" color="dimmed" size="md">
      Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm"/>

      <Group position = "center" mt="sm">
      <Title order={4}>Mark Zuck</Title>
      <Rating value = {4} size="sm" />
      </Group>
      <Text align = "center" color="dimmed" size="md">
      My favourite part is pepperoni
      </Text>

      <Pagination.Root total={20} color="orange" size="md" >
      <Group spacing={8} position="center" mt="md"  >
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next /> 
      </Group>
    </Pagination.Root>
        


      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Picharpa Eamkanitchat 650610791
      </Text>
    </Container>
  );
}
