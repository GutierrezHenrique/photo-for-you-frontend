import api from '../../services/api';

export const deletePhotos = async (
  albumId: string,
  photoIds: string[],
): Promise<void> => {
  // Axios may not send body in DELETE requests, so we use a workaround
  // by sending the data in the request config
  await api.request({
    method: 'DELETE',
    url: `/albums/${albumId}/photos/batch`,
    data: { ids: photoIds },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
