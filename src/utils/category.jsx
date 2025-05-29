export const getCategoryColor = (category) => {
  switch (category) {
    case 'Workshop':
      return { bg: 'bg-blue-500', dot: 'bg-blue-500' };
    case 'Hackathon':
      return { bg: 'bg-purple-500', dot: 'bg-purple-500' };
    case 'Conference':
      return { bg: 'bg-green-500', dot: 'bg-green-500' };
    case 'Seminar':
      return { bg: 'bg-yellow-500', dot: 'bg-yellow-500' };
    case 'Networking':
      return { bg: 'bg-pink-500', dot: 'bg-pink-500' };
    default:
      return { bg: 'bg-gray-500', dot: 'bg-gray-500' };
  }
};