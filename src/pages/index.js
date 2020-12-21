import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ImageHotel from "../components/imageHotel"
import Content from "../components/contentHome"
import useRooms from "../hooks/use-rooms"
import RoomPreview from "../components/roomPreview"

const ListRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const rooms = useRooms()
  console.log(rooms)
  return (
    <Layout>
      <ImageHotel />
      <Content />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Our Rooms
      </h2>
      <ListRooms>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </ListRooms>
    </Layout>
  )
}

export default IndexPage
