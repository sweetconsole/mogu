
const Picture = ({ sources, imgAttr }) => {
  return (
    <picture>
      {sources?.map((source, key) => (
        <source {...source} key={key} />
      ))}

      <img style={{width: "100%", height: "100%"}} {...imgAttr} alt={imgAttr?.alt ? imgAttr.alt : "Lorem impus"} />
    </picture>
  )
}

export default Picture