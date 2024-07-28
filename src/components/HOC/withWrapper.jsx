// Define the HOC
const withWrapper = (WrappedComponent) => {
  const WithWrapper = (props) => {
    return (
      <div className="px-16 py-5">
          <WrappedComponent {...props} />
      </div>
    );
  };

  // Set the displayName property
  WithWrapper.displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`;

  return WithWrapper;
};

// Helper function to get the display name
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withWrapper;
