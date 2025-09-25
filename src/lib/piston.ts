export interface PistonRunResponse {
  language: string;
  version?: string;
  run?: {
    stdout?: string;
    stderr?: string;
    output?: string;
    code?: number;
    signal?: string | null;
  };
  compile?: {
    stdout?: string;
    stderr?: string;
    code?: number;
  };
}

const PISTON_URL = "/api/piston/execute";

const filenameFor = (language: string) => {
  switch (language) {
    case "python":
      return "main.py";
    case "javascript":
      return "main.js";
    case "java":
      return "Main.java";
    case "cpp":
      return "main.cpp";
    case "go":
      return "main.go";
    default:
      return "main";
  }
};

export async function executeWithPiston(params: {
  language: string;
  code: string;
  stdin?: string;
}): Promise<PistonRunResponse> {
  const body = {
    language: params.language,
    version: "*",
    files: [{ name: filenameFor(params.language), content: params.code }],
    stdin: params.stdin ?? "",
  };

  let res: Response;
  try {
    res = await fetch(PISTON_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (e: any) {
    throw new Error(`Network error contacting runner: ${e?.message || e}`);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Execution failed (HTTP ${res.status}): ${text}`);
  }

  return (await res.json()) as PistonRunResponse;
}
