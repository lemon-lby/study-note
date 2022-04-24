import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
  return (
    <div>
      <ThreeLayout left={<div style={{ border: "2px solid #008c8c" }}>左侧</div>} right={<div style={{ border: "2px solid #008c8c" }}>右侧</div>}>
        <div style={{ border: "1px solid red" }}>
          <h1>正文</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus alias magnam natus rem unde sed ipsum, sequi cumque tempora dignissimos, voluptatum molestias ut porro laborum odit reiciendis pariatur aliquid possimus doloremque hic assumenda. Dolores, porro? Illo aut veniam possimus explicabo rerum officiis eaque ea labore voluptatum, iste cupiditate nisi ad debitis eveniet, earum fugiat. Quisquam animi voluptatem veniam! Atque placeat dolores reiciendis quae labore tempore eius eum minima alias rerum magnam nostrum obcaecati quos repellendus dignissimos aperiam possimus, dolorum saepe sed dolorem iure voluptatem natus. Quo, odio totam sequi voluptatibus inventore doloremque fugit nostrum consequuntur tenetur dolores quos minus excepturi?</p>
        </div>

      </ThreeLayout>
    </div>
  )
}
