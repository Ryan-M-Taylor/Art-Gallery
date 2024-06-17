import React from "react";
import styles from "./ArtGallery.module.css";
import { fetchArtData } from "../../utils/utils";
import Featured from "../featured/Featured";

export default async function ArtGallery() {
  const artData = await fetchArtData();
  return (
    <div className={styles.gallery}>
      {artData.map((artwork) => (
        <Featured key={artwork.objectID} {...artwork} />
      ))}
    </div>
  );
}
