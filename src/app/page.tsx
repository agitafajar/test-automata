import JoinedLeagueCard from "./components/cards/JoinedLeagueCard";
import LigaHighlightCard from "./components/cards/LigaHighlightCard";
import { Profile } from "./components/cards/Profile";
import UpcomingMatchCard from "./components/cards/UpcomingMatchCard";

export default function Home() {
  return (
    <div className="space-y-6">
      <Profile />
      <LigaHighlightCard />
      <JoinedLeagueCard />
      <UpcomingMatchCard />
    </div>
  );
}
