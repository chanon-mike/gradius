import type { BulletModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    resBody: BulletModel;
  };
  patch: {
    resBody: BulletModel;
  };
  delete: {
    status: 204;
  };
};
