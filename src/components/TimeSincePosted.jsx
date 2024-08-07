export default function TimeSincePosted({ created_at }) {
  const currentTime = new Date();

  const createdAt = new Date(created_at);
  const msTimeSinceComment = currentTime.getTime() - createdAt.getTime();

  const minutes = Math.floor(msTimeSinceComment / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const monthsApprox = Math.floor(days / 30);

  return (
    <>
      <p className="time-since-posted"> {monthsApprox} months ago</p>
    </>
  );
}
