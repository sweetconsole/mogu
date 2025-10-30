
const Picture = ({ sources, imgAttr }) => {
  return (
    <picture>
      {sources?.map((source, key) => (
        <source {...source} key={key} />
      ))}

      <img {...imgAttr} alt={imgAttr?.alt ? imgAttr.alt : "Lorem impus"} />
    </picture>
  )
}

export default Picture