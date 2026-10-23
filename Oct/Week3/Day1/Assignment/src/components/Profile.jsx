
import { useParams, useSearchParams, useNavigate,} from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const allQueries = [...searchParams.entries()];

  return (
    <div className="page-content">
      <h1>Profile Page</h1>

      <div className="profile-card">

        <p>
          <strong>Profile ID:</strong> {id}
        </p>


        {allQueries.length > 0 ? (
          allQueries.map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))
        ) : (
          <p>No query parameters found.</p>
        )}
      </div>

      <button onClick={() => navigate("/about")}>
        Redirect to About
      </button>
    </div>
  );
}

export default Profile;
