import React from "react";
import { useParams } from "react-router-dom";

export default function MatchList() {
  const params = useParams();
  return <div>yes -{params.matchID}</div>;
}
