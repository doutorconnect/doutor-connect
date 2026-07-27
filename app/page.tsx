import Link from 'next/link';
import {
  Brain,
  Leaf,
  Sparkles,
  Heart,
  MessageCircleHeart,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Lock
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

// Fotos com licença livre para uso comercial (Unsplash License), escolhidas
// para transmitir acolhimento e apoio humano — não fotos de banco genéricas.
const IMG_HERO = 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80';
const IMG_COMFORT = 'https://images.unsplash.com/photo-1484973768669-7fb6b5451095?auto=format&fit=crop&w=900&q=80';
const IMG_SESSION = 'https://images.unsplash.com/photo-1758273241078-8eec353836be?auto=format&fit=crop&w=900&q=80';

const trustPoints = [
  { icon: ShieldCheck, label: 'Profissionais verificados' },
  { icon: Globe2, label: 'Alcance internacional' },
  { icon: Lock, label: 'Privado e seguro' }
];

const whyCareCards = [
  { icon:
