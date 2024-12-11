import PipelineTile from "./tile";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const pipelines = [
  {
    id: "pip_fPJPE3QdSw2SrF6W",
    title: "Live Portrait",
    description:
      "A real-time video to video model that can generate videos from text prompts.",
    image: "liveportrait.gif",
    huggingFaceId: "",
    docs: "https://docs.livepeer.org/api-reference/generate/video-to-video",
    isComfyUI: false,
    isFeatured: true,
  },
  {
    id: "pip_p4XsqEJk2ZqqWLuw",
    title: "Stream Diffusion",
    description:
      "A real-time video to video model that can generate videos from text prompts.",
    image: "StreamDiffusion.jpg",
    huggingFaceId: "",
    docs: "https://docs.livepeer.org/api-reference/generate/video-to-video",
    isComfyUI: false,
    isFeatured: true,
  },
  {
    id: "pip_p4XsqEJk2ZqqWLuw",
    title: "Depth Anything",
    description:
      "A highly practical solution for robust monocular depth estimation.",
    image: "depth-anything.png",
    huggingFaceId: "",
    docs: "https://docs.livepeer.org/api-reference/generate/video-to-video",
    isComfyUI: false,
    isFeatured: true,
  },
  {
    id: "pip_f6PMBBXq44VZCFoP",
    title: "Comfy UI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "comfy-ui.jpeg",
    huggingFaceId: "",
    docs: "https://docs.livepeer.org/api-reference/generate/video-to-video",
    isComfyUI: true,
    isFeatured: false,
  },
  {
    id: "pip_f6PMBBXq44VZCFoP",
    title: "Hello World Pipeline",
    description: "this is my first pipeline!",
    image: "abc.jpg",
    huggingFaceId: "",
    docs: "https://docs.livepeer.org/api-reference/generate/video-to-video",
    isComfyUI: true,
    isFeatured: false,
  },
];


const dummyPlaybackIds = [
  "121312",
  "121312",
  "121312",
  "121312",
]

export default function Winners() {
  return (
    <div className="relative rounded-2xl border p-4 mt-4 h-[calc(100vh-24rem)]">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h3 className="font-medium text-lg">Yeterday's Challenge Winners</h3>
          <p className="text-muted-foreground text-sm w-full">
            Here are the winners of yesterday's challenge. Check out their
            pipelines and give them a shoutout!
          </p>
        </div>
        <div>
          <Link
            href={"/explore"}
            className="text-sm gap-1 flex items-center -ml-20 -mt-8 md:-ml-0 md:-mt-0"
          >
            Participate in today's challenge
            <ArrowTopRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 mt-4">
        {dummyPlaybackIds.map((playbackId) => (
      <div className="aspect-video">
      <iframe
        src={`https://monster.lvpr.tv/?v=${playbackId}&lowLatency=force`}
        className="w-full h-full"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
