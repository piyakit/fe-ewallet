"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const push = (path: string, params?: Record<string, string | number>) => {
    let url = path;
    if (params) {
      const query = new URLSearchParams(
        params as Record<string, string>
      ).toString();
      url += `?${query}`;
    }
    router.push(url);
  };

  const replace = (path: string, params?: Record<string, string | number>) => {
    let url = path;
    if (params) {
      const query = new URLSearchParams(
        params as Record<string, string>
      ).toString();
      url += `?${query}`;
    }
    router.replace(url);
  };

  const back = () => router.back();
  const forward = () => router.forward();
  const reload = () => router.refresh();

  return { push, replace, back, forward, reload };
};
